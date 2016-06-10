def isPrime input
	for j in 3...Math.sqrt(input)
		if input % j == 0
			return false
		end
		j += 1
	end
end

def solution input
	while input % 2 == 0
		p = 2
		input /= 2
	end
	orig = input
	for i in 3...Math.sqrt(orig)
		if isPrime(i)
			while input % i == 0
				input /= i
				p = i
			end
			if input == 1
				break
			end
		end
		i += 2
	end
	return p
end

puts solution(600851475143)