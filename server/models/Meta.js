const mongoose = require('mongoose')

const MetaSchema = new mongoose.Schema({
  // URI of the video
  videoUrl: {
    type: String,
    required: true
  },
  // URI small thumbnail of video
  smallThumbUrl: {
    type: String
  },
  // URI large thumbnail of video
  largeThumbUrl: {
    type: String
  },
  // Title of the video
  videoTitle: {
    type: String,
    required: true
  },
  // Name of person that made the video
  videoProducer: {
    type: String,
    required: true
  },
  // Platform the video is on
  videoLocation: {
    type: String,
    required: true
  },
  // The year the video was made
  videoYear: {
    type: String
  },
  // How long is the video
  videoLength: {
    type: String
  },
  // Information on what the video is about
  videoDesc: {
    type: String,
    required: true
  }
})

module.exports = Meta = mongoose.model('meta', MetaSchema)
