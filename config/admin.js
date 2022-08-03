module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9a02b6325455301fe3807dbaf2fadf3e'),
  },
});
