const express = require('express')
const { check, validationResult } = require('express-validator')
const Meta = require('../models/Meta')
const router = express.Router()

// @route   POST /meta
// @desc    Register video
// @access  Public
router.post(
  '/',
  [
    check('videoUrl', 'A video url is required').not().isEmpty(),
    check('videoTitle', 'A video Title is required').not().isEmpty(),
    check('videoProducer', 'Who owns or made the video - Producer is required')
      .not()
      .isEmpty(),
    check(
      'videoLocation',
      'What platform is the video on - Location is required'
    )
      .not()
      .isEmpty(),
    check('videoDesc', 'A video description is required').not().isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const {
      videoUrl,
      smallThumbUrl,
      largeThumbUrl,
      videoTitle,
      videoProducer,
      videoLocation,
      videoYear,
      videoLength,
      videoDesc
    } = req.body

    let meta = await Meta.findOne({ videoUrl })

    try {
      if (meta) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'video already exists' }] })
      }

      meta = new Meta({
        videoUrl,
        smallThumbUrl,
        largeThumbUrl,
        videoTitle,
        videoProducer,
        videoLocation,
        videoYear,
        videoLength,
        videoDesc
      })

      await meta.save()
      return res.send('Video is registered')
    } catch (err) {
      console.error('meta route error: ', err)
      return res.status(500).json({ msg: 'Server error on route meta' })
    }
  }
)

module.exports = router
