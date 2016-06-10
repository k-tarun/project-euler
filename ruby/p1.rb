def solution input
	input -= 1
	sum = 0
	multiples15 = input.to_f / 15
	multiples = (multiples15 * 5).to_i
	sum += (multiples * (multiples + 1)) * 3 / 2
	multiples = (multiples15 * 3).to_i
	sum += (multiples * (multiples + 1)) * 5 / 2
	multiples = multiples15.to_i
	sum -= (multiples * (multiples + 1)) * 15 / 2
	return sum
end

puts solution(1000)