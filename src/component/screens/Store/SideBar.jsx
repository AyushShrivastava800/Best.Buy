import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function SideBar() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
     
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Category</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Womens</Typography>
            </AccordionSummary>
          </Accordion>
        </AccordionDetails>
        <AccordionDetails>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Kids</Typography>
            </AccordionSummary>
          </Accordion>
        </AccordionDetails>
        <AccordionDetails>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Mens</Typography>
            </AccordionSummary>
          </Accordion>
        </AccordionDetails>
      </Accordion>

      <Accordion >
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
              label="Puma"
            />
            <FormControlLabel control={<Checkbox />} label="Addidas" />
            <FormControlLabel  control={<Checkbox />} label="Reebok" />
            <FormControlLabel control={<Checkbox />} label="Puma" />
            <FormControlLabel control={<Checkbox />} label="Addidas" />
            <FormControlLabel control={<Checkbox />} label="Reebok" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Size</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
      
        <FormControlLabel control={<Checkbox defaultChecked/>} label="s" />
        <FormControlLabel  control={<Checkbox />} label="M" />
        <FormControlLabel control={<Checkbox />} label="L" />
        <FormControlLabel control={<Checkbox />} label="XL" />
        <FormControlLabel control={<Checkbox />} label="XX-L" />
        <FormControlLabel control={<Checkbox />} label="XXX-L" />
      </FormGroup>
        </AccordionDetails>
      </Accordion>

      <Accordion >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3a-content"
        id="panel3a-header"
      >
        <Typography>Price</Typography>
      </AccordionSummary>
      <AccordionDetails>
      
      <Box width={'100%'}>
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
