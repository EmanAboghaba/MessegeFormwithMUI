import React, { useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import {
  Box,
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
  FormControlLabel,
  Switch,
  TextField,
  Select,
  MenuItem,
  Paper,
  Grid,
} from "@mui/material";

const steps = [
  "Sending Method",
  "Sender Name",
  "Recipient Phone Numbers",
];

export  function MessageForm() {
  const [template, setTemplate] = useState("none");
  const [message, setMessage] = useState("");
  const [transliteration, setTransliteration] = useState(false);
  const [lifetime, setLifetime] = useState(false);
  const [duplication, setDuplication] = useState(false);

  const recipientCount = 54;
  const sender = "Toyota";

  const handleSend = () => {
    alert("Message scheduled!");
  };

  return (
    <Box p={2} display={"flex"}  gap={10} alignContent={"center"} justifyContent={"center"}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Stepper sx={{border: "1px solid #000",
          borderRadius: "8px", padding: "12px",
          }} activeStep={3} orientation="vertical">
            {steps.map((label, i) => (
              <Step key={i}>
                <StepLabel  sx={{
          "& .MuiStepIcon-root.Mui-completed": {
            color: "green",
          },
        }}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Box mt={4}>
          <Stepper activeStep={1} orientation="vertical">
            <Step>
              <StepLabel sx={{
          "& .MuiStepIcon-root.Mui-completed": {
            color: "green",
          },
        }}>Sender Name</StepLabel>
            </Step> 
            </Stepper>
          
            <Typography variant="h6">Message Template</Typography>
            <Select
              fullWidth
              value={template}
              onChange={(e) => setTemplate(e.target.value)}
              sx={{ mt: 1 }}
            >
              <MenuItem value="none">None</MenuItem>
              <MenuItem value="template1">template1</MenuItem>
              <MenuItem value="template2">template2</MenuItem>
            </Select>

            <TextField
              multiline
              rows={4}
              fullWidth
              margin="normal"
              placeholder="Enter your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <Box display="flex" flexWrap="wrap" gap={2}>
              <FormControlLabel
                control={
                  <Switch
                  sx={{'& .MuiSwitch-switchBase.Mui-checked': {
                    color: 'green', 
                  },'& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                    backgroundColor: 'green', 
                  } }}
                    checked={transliteration}
                    onChange={() => setTransliteration(!transliteration)}
                  />
                }
                label="Transliteration"
              />
              <FormControlLabel
                control={
                  <Switch
                  sx={{'& .MuiSwitch-switchBase.Mui-checked': {
                    color: 'green', 
                  },'& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                    backgroundColor: 'green', 
                  } }}
                    checked={lifetime}
                    onChange={() => setLifetime(!lifetime)}
                  />
                }
                label="Lifetime"
                
              />
              <FormControlLabel
                control={
                  <Switch
                  sx={{'& .MuiSwitch-switchBase.Mui-checked': {
                    color: 'green', 
                  },'& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                    backgroundColor: 'green', 
                  } }}
                    checked={duplication}
                    onChange={() => setDuplication(!duplication)}
                  />
                }
                label="Duplication"
              />
            </Box>
          </Box>

          <Box mt={3}>
            <Button variant="contained" color="success" fullWidth>
              CONTINUE
            </Button>
          </Box>
        </Grid>

        {/* Right Panel */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Your Message</Typography>
            <Typography>Standard Pricing</Typography>
            <Typography>Sender: {sender}</Typography>
            <Typography>
              <span fontSize={22} mt={2} >Recipients:</span> +79091231313 and {recipientCount - 1} more
            </Typography>
            <Typography mt={2}>{message || "....."}</Typography>
            <Typography fontSize={22}  mt={2} >Options:</Typography> 
            <Typography>
              <span>{transliteration ? "transliteration, " : ""}</span>
              <span> {lifetime ? "lifetime, " : ""}</span>
            
              {duplication ? "duplication" : ""}
              {!(transliteration || lifetime || duplication) && "None"}
            </Typography>
            <Typography variant="subtitle1" fontWeight="bold" mt={2}>
              Total:  
              <span><Typography display={"inline-block"} color="red" p={.5}>{recipientCount}</Typography> SMS</span>
            </Typography>
            <Button
              variant="contained"
              color="success"
              fullWidth
              sx={{ mt: 2 }}
              onClick={handleSend}
            >
              
              SCHEDULE
            <span > <SendIcon /></span>
            </Button>
            <Button variant="outlined" color="black" fullWidth sx={{ mt: 1 }}>
              SCHEDULE
              <CalendarTodayIcon />
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
