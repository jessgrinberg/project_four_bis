require 'elasticsearch/model'

class Map < ActiveRecord::Base
	belongs_to :user
	include Elasticsearch::Model
  	include Elasticsearch::Model::Callbacks

end
Map.import # for auto sync model with elastic search


