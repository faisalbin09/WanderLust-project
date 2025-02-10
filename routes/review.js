const express = require("express");
const router = express.Router({mergeParams : true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");
const { createReview, deleteReview } = require("../controllers/reviews.js");

//post route for reviews
router.post("/",isLoggedIn, validateReview,wrapAsync(createReview));

//delete route for reviews
router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(deleteReview));

module.exports = router;