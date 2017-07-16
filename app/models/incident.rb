class Incident < ApplicationRecord
  def full_address
    if self.address
    self.intersection + ", " + self.city + ", " + self.state
    else
    self.city + ', ' + self.state
    end
  end


  def intersection
    if self.address
      if self.address.include?(' and ')
        self.address.split(' and ')[0]
      else
        self.address
      end
    end
  end

  def latitude
    coords = Geocoder.search(self.full_address)[0]
    if coords
      coords.geometry['location']['lat']
    else
      nil
    end
  end

  def longitude
    coords = Geocoder.search(self.full_address)[0]
    if coords
      coords.geometry['location']['lng']
    else
      nil
    end
  end

  def fetch_and_assign_coords
    if self.lat == nil
      coords = Geocoder.search(self.full_address)[0]
      if coords
        # p coords.geometry['location']
        self.update(lat: coords.geometry['location']['lat'])
        self.update(lon: coords.geometry['location']['lng'])
      end
    end
  end


end
