/* eslint-disable camelcase */
const mapDBToModel = ({
  id,
  title,
  body,
  tags,
  username,
  created_at,
  updated_at,
}) => ({
  id,
  title,
  body,
  tags,
  username,
  createdAt: created_at,
  updatedAt: updated_at,
});

module.exports = { mapDBToModel };
