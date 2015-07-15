class Map < ActiveRecord::Base
	belongs_to :user
	searchkick word_middle: [:organization, :address, :phone, :website]
end
