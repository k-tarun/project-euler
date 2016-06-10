def solution input
	i,j,c,sum = 1,2,0,2
	while j < input
		if c==3
			sum += j
			c = 0
		end
		i,j = j,j+=i
		c+=1
	end
	return sum
end

puts solution 4000000