class Api::SongsController < ApplicationController
  def index
    @songs = Song.all
    render :index
  end

  def discover
    @songs = Song.order("RANDOM()").limit(10)
    render "api/songs/index"
  end

  def show
    @song = Song.find(params[:id])
    if @song
      render "api/songs/show"
    else
      render json: nil, status: 404
    end
  end

  def create
    @song = Song.new(song_params)
    if @song.save!
      render "api/songs/show"
    else
      render json: @song.errors, status: 422
    end
  end

  private def song_params
    params.require(:song).permit(:title, :user_id, :audio)
  end
end
