# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.destroy_all

# Seed Guest Account
User.create!(username: "Guest", password: "YesWeCan")

# Seed Test Accounts
User.create!(username: "GeorgeBush", password: "NeverBeFooledAgain")
User.create!(username: "BarackObama", password: "YesWeCan")
User.create!(username: "DonaldTrump", password: "$$$$$$")
