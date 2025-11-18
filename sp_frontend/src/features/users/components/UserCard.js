/**
=========================================================
* UserCard Component
=========================================================
* Feature-specific component for displaying user card
*/

import PropTypes from "prop-types";
import SPBox from "components/base/SPBox";
import SPAvatar from "components/base/SPAvatar";
import SPTypography from "components/base/SPTypography";
import SPBadge from "components/base/SPBadge";
import { getStatusColor } from "core/utils";

function UserCard({ user, onClick }) {
  return (
    <SPBox
      p={2}
      borderRadius="lg"
      sx={{
        cursor: onClick ? "pointer" : "default",
        "&:hover": onClick
          ? {
              boxShadow: 3,
              transform: "translateY(-2px)",
              transition: "all 0.2s",
            }
          : {},
      }}
      onClick={onClick}
    >
      <SPBox display="flex" alignItems="center" gap={2}>
        <SPAvatar
          sx={{
            width: 48,
            height: 48,
            bgcolor: "primary.main",
          }}
        >
          {user.name?.charAt(0) || "U"}
        </SPAvatar>
        <SPBox flex={1} minWidth={0}>
          <SPTypography variant="h6" fontWeight="medium" noWrap>
            {user.name}
          </SPTypography>
          <SPTypography variant="caption" color="text" sx={{ opacity: 0.7 }}>
            {user.email}
          </SPTypography>
        </SPBox>
        {user.status && (
          <SPBadge
            variant="contained"
            badgeContent={user.status}
            color={getStatusColor(user.status)}
            size="xs"
          />
        )}
      </SPBox>
    </SPBox>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    email: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func,
};

export default UserCard;
