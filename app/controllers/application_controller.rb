class ApplicationController < ActionController::Base
	def health_check
		render json: {result: 'ok'}
	end
end
