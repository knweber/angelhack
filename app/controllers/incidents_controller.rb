require 'json'

class IncidentsController < ApplicationController

  def index
    @incidents = Incident.all
    # @incidents.each do |incident|
    #
    #   coord_pair = '{'+ incident.lat + ', ' + incident.lon + '}'
    #
    #   date = incident.month + ' ' + incident.day.to_s + ', ' + incident.year.to_s;
    #
    #   info = {:loc => coord_pair, :name =>  incident.name, :date => date, :race => incident.race, :sex => incident.sex, :age => incident.age.to_s, :cause => incident.cause}
    #
    #   info.to_json
    # end
  end

end
