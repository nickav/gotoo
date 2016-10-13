class HomeController < ApplicationController
  def static_index
    render :file => 'public/index.html'
  end
end
