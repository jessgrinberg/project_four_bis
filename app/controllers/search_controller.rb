class SearchController < ApplicationController
	def search
 		 if params[:q].nil?
    @maps = []
  else
    @maps = Map.search params[:q]
  end
end

	def show
		end
end
