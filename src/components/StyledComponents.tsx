import { createStyles, Theme } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { PaginationClassKey } from "material-ui-flat-pagination";
import styled from "styled-components";

export const CardContainer = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 15px;
  border: 1px solid #eeeeee;

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    height: 200px;

    img {
      height: 100%;
    }
  }

  .text__area {
    margin: 15px;
  }
`;

export const PaginationSetting = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const paginationStyles = (theme: Theme) =>
  createStyles<
    | "paperRoot"
    | Extract<
        PaginationClassKey,
        "text" | "colorInheritCurrent" | "colorInheritOther"
      >
  >({
    paperRoot: {
      margin: theme.spacing.unit * 2,
      padding: theme.spacing.unit * 2
    },
    text: {
      textTransform: "initial"
    },
    colorInheritCurrent: {
      color: "#000000",
      "&:hover": {
        // backgroundColor: "#ffffff",
        // borderBottom: "5px solid black",
        // borderRadius: "0px"
      },
      background: "#ffffff",
      borderBottom: "4px solid black",
      marginBottom: "-4px",
      borderRadius: "0px"
    },
    colorInheritOther: {
      color: "#223344",
      "&:hover": {
        backgroundColor: fade("#223344", theme.palette.action.hoverOpacity)
      }
    }
  });

export const WhiteSpace = styled.div`
  height: ${({ height = 10 }: { height?: number }) => height}px;
`;

export const Divider = styled.div`
  border: ${({ weight = 0.5 }: { weight?: number }) => weight}px solid #eeeeee;
`;
