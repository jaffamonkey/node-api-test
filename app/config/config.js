var config = {
	useNewUrlParser: true,
	port: process.env.PORT || 2000,
	db: process.env.MONGOLAB_URI || "mongodb://localhost:27017/todoapi",
	test_port: 2001,
	test_db: "mongodb://localhost:27017/easy_blog"
}
module.exports = config;