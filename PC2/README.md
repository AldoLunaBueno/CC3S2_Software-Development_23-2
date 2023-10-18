# Práctica calificada 2 <!-- omit in toc -->

## Parte 1. Algoritmos

### Ítem 1. Letra faltante

Escribimos el método `pick_one_missed()` (de una clase `StringAnalyzer`) para encontrar cuál es la letra que falta en una cadena compuesta de letras y espacios donde solo falta una de las letras del alfabeto.

```ruby
class StringAnalyzer
  # @param [String] str
  # @return [String]
  def pick_one_missed(str)
    alphabet = Array.new(26, false)
    str.downcase
    str = str.gsub(/\s+/, "")
    str.each_byte do |c|
      c -= 97
      alphabet[c] = true if alphabet[c] == false
    end
    c = alphabet.index(false) + 97
    c.chr
  end
end
```

Probamos cómo funciona este método con la cadena de ejemplo. El método detecta que la letra faltante es la 'f', como se puede ver en esta captura:

![](sources/2023-10-11-16-52-59.png)

El método tiene una complejidad de O(n), como se pidió, porque solo recorre una vez los caracteres de la cadena. En cada iteración actualizamos un arreglo donde cada elemento se corresponde con una letra del alfabeto y representa la letra tuvo al menos una aparición en la cadena. Al terminar de recorrer el arreglo buscamos el índice del elemento que no registró aparición, y así encontramos la letra que falta.

### Ítem 2. BinaryTree

Creamos la clase `BinaryTree` cuyos métodos son `initialize()`, `<<`, `empty?`, `each()`. El constructor puede o no tomar un valor para el nodo raíz. Insertamos valores en nuevos nodos del árbol usando el método `<<`. El método `each()` recorre el árbol en orden (in-order traversal), por lo que en el siguiente ítem se usará para definir el método `sort()`.

```ruby
class BinaryTree
  attr_accessor :node_value, :left, :right
  def initialize(*args)
    case args.size
    when 0
      @node_value = nil
    when 1
      @node_value = args[0]
    else
      # type code here
    end
    @left = nil
    @right = nil
  end
  def <<(value)
    if @node_value.nil?
      @node_value = value
    elsif value <= @node_value
      if @left.nil?
        @left = BinaryTree.new(value)
      else
        @left << value
      end
    elsif value > @node_value
      if @right.nil?
        @right = BinaryTree.new(value)
      else
        @right << value
      end
    end
  end
  def empty?
    @left.nil? and @right.nil?
  end
  def each(&block)
    @left.each(&block) if @left
    yield @node_value
    @right.each(&block) if @right
  end
end
```

### Ítem 3

En este ítem nos piden extender la clase `BinaryTree`, lo cuál entendimos no como una simple adición de nuevos métodos, sino como el requerimiento de crear una nueva clase que herede de la que ya hemos creado. Esta nueva clase se llama `BinaryTreeExtended`:

```ruby
class BinaryTreeExtended < BinaryTree

  def initialize(*args)
    super(*args)
  end

  # @param [Integer] value
  def <<(value)
    if @node_value.nil?
      @node_value = value
    elsif value <= @node_value
      if @left.nil?
        @left = BinaryTreeExtended.new(value)
      else
        @left << value
      end
    elsif value > @node_value
      if @right.nil?
        @right = BinaryTreeExtended.new(value)
      else
        @right << value
      end
    end
  end

  # @param [Integer] value
  # @return [FalseClass, TrueClass]
  def include?(value)
    if @node_value.nil?
      false
    elsif value == @node_value
      true
    elsif value < @node_value
      if @left.nil?
        false
      else
        @left.include?(value)
      end
    elsif value > @node_value
      if @right.nil?
        false
      else
        @right.include?(value)
      end
    end
  end

  def all?(&block)
    if @left && @right
      block.call(@node_value) && @left.all?(&block) && @right.all?(&block)
    else
      block.call(@node_value)
    end
  end

  def any?(&block)
    if @left && @right
      block.call(@node_value) || @left.any?(&block) || @right.any?(&block)
    else
      block.call(@node_value)
    end
  end

  def sort
    sorted = []
    each { |element| sorted << element }
    sorted
  end
end
```

Para usar la herencia en una clase que usa métodos de forma recursiva sobre instancias de la misma clase aprendimos que debemos sobreescribir el método que crea las instancias. 

Concretamente, tuvimos que sobreescribir el método `<<` de inserción de elementos. ¿Por qué? Por que si no todos los nodos (excepto el nodo raíz) serían instancias de la clase padre `BinaryTree` en vez de que sean de la clase hija `BinaryTreeExtended`, y no se podría usar el método recursivo como `include?` de la clase hija sobre dichos nodos. Con este método sobreescrito, todos los elementos insertados en el árbol ahora son instancias de la clase correcta: `BinaryTreeExtended`.

## Parte 3. Rails
![](sources/2023-10-11-09-47-47.png)
![](sources/2023-10-11-09-48-22.png)
![](sources/2023-10-11-09-47-08.png)

Verificamos que la versión instalada es Rails 7.0.8

![](sources/2023-10-11-09-49-42.png)

