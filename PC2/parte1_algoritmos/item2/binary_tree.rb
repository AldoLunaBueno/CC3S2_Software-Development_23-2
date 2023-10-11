# frozen_string_literal: true

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

tree = BinaryTree.new

puts "¿El árbol está vacío? #{tree.empty? ? 'Sí' : 'No'}"
puts "Insertamos valores usando la operación <<"
tree << 4
tree << 5
tree << 2
tree << 1
tree << 3

puts "¿El árbol está vacío? #{tree.empty? ? 'Sí' : 'No'}"

puts "Mostramos los valores insertados en orden:"

tree.each{ |x| puts x }