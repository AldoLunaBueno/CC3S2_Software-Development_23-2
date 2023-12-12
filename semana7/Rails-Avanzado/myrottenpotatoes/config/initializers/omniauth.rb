# Replace API_KEY and API_SECRET with the values you got from Twitter
Rails.application.config.middleware.use OmniAuth::Builder do
  provider :twitter, "k48eqcaF8CxZ4FLx6cTdBSaHP", "HpzgE16qQtaQzurhqEgLT2Sagil6VMOA8yB4OKcLAHbni6fdAo"
end
