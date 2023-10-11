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

  # @param [Integer] value
  def <<(value)
    if @node_value.nil?
      @node_value = value
    elsif value <= @node_value
      if @left.nil?
        @left =  self.new(value)
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
