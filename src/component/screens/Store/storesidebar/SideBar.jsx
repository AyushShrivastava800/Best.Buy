import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useSelector } from "react-redux";
import { Categoryfilter } from "../../../features/slice/filterSortSlice";
import { useDispatch } from "react-redux";
export default function SideBar() {
  const { cartItems } = useSelector((store) => store.cart);
  const [expanded, setExpanded] = React.useState("panel1");
  const dispatch = useDispatch();
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const unique2 = cartItems.filter((obj, index) => {
    return index === cartItems.findIndex((e) => obj.category === e.category);
  });

  return (
    <div className="main-sidebar">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Category</Typography>
        </AccordionSummary>
        {unique2.map((items) => (
          <AccordionDetails
            key={items.id}
            onClick={() => dispatch(Categoryfilter(items.category))}
  
          >
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="categories"
            >
              <Typography>{items.category}</Typography>
            </AccordionSummary>
          </AccordionDetails>
        ))}
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Brand</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              className="categories"
              label="Puma"
            />
            <FormControlLabel control={<Checkbox />} className="categories" label="Addidas" />
            <FormControlLabel control={<Checkbox />} className="categories" label="Reebok" />
            <FormControlLabel control={<Checkbox />} className="categories" label="Puma" />
            <FormControlLabel control={<Checkbox />} className="categories" label="Addidas" />
            <FormControlLabel control={<Checkbox />} className="categories" label="Reebok" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Size</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} className="categories"label="s" />
            <FormControlLabel control={<Checkbox />} className="categories" label="M" />
            <FormControlLabel control={<Checkbox />} className="categories" label="L" />
            <FormControlLabel control={<Checkbox />} className="categories" label="XL" />
            <FormControlLabel control={<Checkbox />} className="categories" label="XX-L" />
            <FormControlLabel control={<Checkbox />} className="categories" label="XXX-L" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box width={"100%"}>
            <Slider
              size="small"
              defaultValue={70}
              aria-label="Small"
              valueLabelDisplay="auto"
            />
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
