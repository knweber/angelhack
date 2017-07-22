require 'json'
require 'csv'

class IncidentsController < ApplicationController

  def index
    # CSV.foreach('lib/incidents_with_coords.csv', headers: true) do |row|
    #   Incident.create! row.to_hash
    # end
    # @incidents = Incident.all
    # @incidents.to_json
  end

end
