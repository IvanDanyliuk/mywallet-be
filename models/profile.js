import mongoose from 'mongoose';

const profileSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  photoUrl: String,
  merchants: [String],
  currency: [String],
});

let Profile = mongoose.model('Profile', profileSchema);

export default Profile;