class Api::LikesController < ApplicationController
  def create
    @like = Like.new(user_id: current_user.id, song_id: params[:song_id])

    if @like.save!
      @song = Song.find(@like.song_id)
      render "api/songs/show"
    else
      render json: @like.errors, status: 422
    end
  end

  # Work on this
  def destroy
    @like = Like.find_by(user_id: current_user.id, song_id: params[:song_id])

    if @like
      @song = Song.find(@like.song_id)
      @like.destroy!
      render 'api/songs/show'
    else
      render json: ["nil"], status: 422
    end
  end
end
