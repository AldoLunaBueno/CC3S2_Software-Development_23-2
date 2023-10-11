# frozen_string_literal: true
require_relative 'binary_tree'
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

tree = BinaryTreeExtended.new

puts "(Método: empty?) ¿El árbol está vacío? #{tree.empty? ? 'Sí' : 'No'}"
puts 'Insertamos valores usando la operación <<'
tree << 4
tree << 5
tree << 2
tree << 1
tree << 3

puts "(Método: emtpy?) ¿El árbol está vacío? #{tree.empty? ? 'Sí' : 'No'}"

puts '(Método: each) Mostramos los valores insertados recorriendo el árbol (in-order traversal):'

tree.each { |x| puts x }

puts '(Método: include?) ¿Incluye los valores 0, 1, y 4?'

[0, 1, 4].each { |x| puts tree.include?(x) ? 'Sí' : 'No' }

puts '(Método: all?)¿Todos los elementos son pares?'
puts tree.all?(&:even?) ? 'Sí' : 'No'

puts '(Método: any?) ¿Algún elemento es igual a 4?'
puts tree.any? { |x| x == 4 } ? 'Sí' : 'No'

puts "(Método: sort) Elementos del árbol en orden ascendente: #{tree.sort}"