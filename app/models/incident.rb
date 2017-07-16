class Incident < ApplicationRecord
  def full_address
    self.intersection + ", " + self.city + ", " + self.state
  end


  def intersection
    if self.address.include?(' and ')
      self.address.split(' and ')[0]
    else
      self.address
    end
  end

  def lat
    coords = Geocoder.search(self.full_address)[0]
    if coords
      coords.geometry['location']['lat']
    else
      nil
    end
  end

  def lon
    coords = Geocoder.search(self.full_address)[0]
    if coords
      coords.geometry['location']['lng']
    else
      nil
    end
  end

end
