class Api::SongsController < ApplicationController
  def index
    @songs = Song.includes(:artist, :comments).all
    render :index
  end

  def discover
    @songs = Song.includes(:artist, :comments).order("RANDOM()").limit(8)

    p @songs.map { |song| song.title }
    render "api/songs/index"
  end

  def show
    @song = Song.includes(:comments, :commenters).find(params[:id])
    if @song
      render "api/songs/show"
    else
      render json: nil, status: 404
    end
  end

  def create
    @song = current_user.songs.new(song_params)
    if @song.save!
      render "api/songs/show"
    else
      render json: @song.errors, status: 422
    end
  end

  private def song_params
    params.require(:song).permit(:title, :description, :audio, :img)
  end
end
