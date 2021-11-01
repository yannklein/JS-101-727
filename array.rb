# CRUD
students = ["Caio", "Ryota", "Jesse"]

# Create
students.push("Michael")
students << "Michi"
p students

# Read
p students[1]

# Update
students[1] = "Super Ryota"
p students

# Delete 
students.delete_at(1)
p students

students.each do |student|
  puts "#{student} is fabulous!"
end