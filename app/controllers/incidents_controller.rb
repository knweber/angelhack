require 'json'

class IncidentsController < ApplicationController

  def index
     @incidents = Incident.all
    #  respond_to do |format|
    #    format.html { render :index }
    #    format.js { render :json => @incidents}
    #    format.json { render :json => @incidents}
    #  end
    if request.xhr?
      render :json => @incidents
    else
      render :index
    end
  end

end
