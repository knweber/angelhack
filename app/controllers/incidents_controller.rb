require 'json'

class IncidentsController < ApplicationController

  def index
    @incidents = Incident.all
    add_marker_data = []
    @incidents.each do |incident|
      info = incident.single_incident_info
      add_marker_data.push(info)
    end
    add_marker_data.to_json
  end

end
