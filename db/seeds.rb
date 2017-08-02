require 'json'

incidents = CSV.read('lib/incidents_with_coords.csv')


# incidents_json = [{"_id":"596a6633bc4435bc7eb942ac","name":"Richard Jones","age":"55","sex":"Male","race":"White","month":"December","day":"6","year":"2016","address":"3500 Ridgewood Dr","city":"Hutchinson","state":"KS","cause":"Gunshot","dept":"Hutchinson Police Department","armed":"Firearm","__v":0},{"_id":"596a6633bc4435bc7eb942b1","name":"Unknown","age":"Unknown","sex":"Male","race":"White","month":"December","day":"8","year":"2016","address":"200 N Arbor Ridge Dr
# incidents = []
# incidents_json.each do |incident|
#   single_inc = {"name" => incident[:name], "age" => incident[:age], "sex" => incident[:sex], "race" => incident[:race], "month" => incident[:month], "day" => incident[:day], "year" => incident[:year], "address" => incident[:address], "city" => incident[:city], "state" => incident[:state], "cause" => incident[:cause], "dept" => incident[:dept], "armed" => incident[:armed]}
#   incidents.push(single_inc)
# end

incidents.each do |inc|
  Incident.create(name: inc[1], age: inc[2], sex: inc[3], race: inc[4], month: inc[5], day: inc[6], year: inc[7], address: inc[8], city: inc[9], state: inc[10], cause: inc[11], dept: inc[12], armed: inc[13], lat: inc[14], lon: inc[15])
end
