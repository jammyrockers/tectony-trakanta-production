// foodmodel.js

var mongoose = require("mongoose");

var memberSchema = mongoose.Schema(
  {
    // กำหนด ชื่อและชนิดของ document เรา
    member_name: {
      type: String
    },
    facebook_name: {
      type: String
    },
    member_email: {
      type: String
    },
    member_telno: {
      type: String
    },
    member_address: {
      type: String
    },
    sec_member_address: {
      type: String
    },
    member_totalprice: {
      type: Number
    },
    member_detail: {
      type: String
    },
    date: { type: Date, default: Date.now },
  },
  {
    // กำหนด collection ของ MongoDB หรือจะไม่กำหนดก็ได้
    collection: "member"
  }
);

// ถ้าไม่ได้กำหนด collection ข้างบน default จะเป็น "foods"
var Member = mongoose.model("member", memberSchema);
module.exports = Member;