class Api::SongsController < ApplicationController
  def index
    @songs = Song.includes(:artist, :comments, :likings).all
    render :index
  end

  def discover
    @songs = Song.includes(:artist, :comments, :likings).order("RANDOM()").limit(8)

    p @songs.map { |song| song.title }
    render "api/songs/index"
  end

  def user_songs
    # debugger
    @songs = Song.includes(:artist, :comments, :likings).where(user_id: params[:user_id])
    render "api/songs/index"
  end

  def stream
    @follows = User.find(params[:id]).follows.includes(:songs)
    @songs = @follows.reduce([]) { |accum, el| accum += el.songs}.sort_by(&:created_at)[0...10]
    render "api/songs/index"
  end

  def show
    @song = Song.includes(:comments, :commenters, :likings).find(params[:id])
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

  def destroy
    @song = Song.find(params[:id]);
    if @song
      @song.destroy!
      @user = current_user
      render 'api/users/show';
    else
      render json: ["nil"], status: 422
    end
  end

  private def song_params
    params.require(:song).permit(:title, :description, :audio, :img)
  end
end
