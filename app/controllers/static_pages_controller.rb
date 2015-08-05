class StaticPagesController < ApplicationController
  # def welcome
  #   if params[:search].present?
  #     @maps = Map.search params[:search]
  #   else
  #     @maps = Map.all
  #     respond_to do |format|
  #       format.html { render }
  #       format.json { render json: @maps}
  #     end
  #   end
  # end

    def welcome
    if params[:search].present?
  @maps = Map.where("address ilike ? ", "%#{params[:search]}%")




#elastic search
  # if params[:search].present?
  #     @maps = Map.search params[:search]
     
  else
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
end
