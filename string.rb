student = "Konstantin"
p student

p student[0]
p student[-1]
p student[0..5]
p student.slice(0, 4)

p student.upcase
p student.downcase
p student.capitalize

split_student = student.split('')
p split_student

p split_student.join

p "#{student} is amazing!"