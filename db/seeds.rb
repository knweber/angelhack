incidents = CSV.read('lib/incidents_with_coords.csv')


# incidents_json = [{"_id":"596a6633bc4435bc7eb942ac","name":"Richard Jones","age":"55","sex":"Male","race":"White","month":"December","day":"6","year":"2016","address":"3500 Ridgewood Dr","city":"Hutchinson","state":"KS","cause":"Gunshot","dept":"Hutchinson Police Department","armed":"Firearm","__v":0},{"_id":"596a6633bc4435bc7eb942b1","name":"Unknown","age":"Unknown","sex":"Male","race":"White","month":"December","day":"8","year":"2016","address":"200 N Arbor Ridge Dr
# incidents = []
# incidents_json.each do |incident|
#   single_inc = {"name" => incident[:name], "age" => incident[:age], "sex" => incident[:sex], "race" => incident[:race], "month" => incident[:month], "day" => incident[:day], "year" => incident[:year], "address" => incident[:address], "city" => incident[:city], "state" => incident[:state], "cause" => incident[:cause], "dept" => incident[:dept], "armed" => incident[:armed]}
#   incidents.push(single_inc)
# end

incidents.each do |inc|
  Incident.create(name: inc[0], age: inc[1], sex: inc[2], race: inc[3], month: inc[4], day: inc[5], year: inc[6], address: inc[7], city: inc[8], state: inc[9], cause: inc[10], dept: inc[11], armed: inc[12], lat: inc[13], lon: inc[14])
end
