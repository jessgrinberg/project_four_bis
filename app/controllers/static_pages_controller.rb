class StaticPagesController < ApplicationController
  def welcome

    @maps = Map.all
        respond_to do |format|
        format.html {
            render
        }
        format.json {
            render json: @maps
        }
  end
  end
end
