json.array!(@maps) do |map|
  json.extract! map, :id, :organization, :address, :phone, :website, :user_id
  json.url map_url(map, format: :json)
end
