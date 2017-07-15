class Incident < ApplicationRecord
  def full_address
    self.address + ", " + self.city + ", " + self.state
  end

  def lat
    Geocoder.search(self.full_address)[0].geometry['location']['lat']
  end

  def lon
    Geocoder.search(self.full_address)[0].geometry['location']['lat']
  end

end
