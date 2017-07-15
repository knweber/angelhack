require 'csv'
require 'geocoder'

# CSV.foreach('lib/counted.csv') do |row |
# p Geocoder.search(row[7] + ', ' + row[8] + ',' + row[9])
# end

p Geocoder.search(Incident.find(1).full_address)

#
# {"long_name"=>"Hampton", "short_name"=>"Hampton", "types"=>["locality", "political"]}, {"long_name"=>"Henry County", "short_name"=>"Henry County", "types"=>["administrative_area_level_2", "political"]}, {"long_name"=>"Georgia", "short_name"=>"GA", "types"=>["administrative_area_level_1", "political"]}
