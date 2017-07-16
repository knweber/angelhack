require 'csv'
require 'geocoder'

csv_arr = CSV.read('lib/counted.csv')

csv_arr.each do |row|
  incident = Incident.find_by(name: row[0])
  if incident.lat
    row << incident.lat
    row << incident.lon
    CSV.open('lib/counted_with_coords', 'wb') do |csv|
      csv << row
    end
  else
    csv_arr.delete(row)
  end
end

#
# CSV.open('lib/counted_with_coords.csv', 'w') do |csv|
#   r = 0
#   csv_arr.length.times do
#   csv << csv_arr[r]
#     r += 1
#   end
# end
