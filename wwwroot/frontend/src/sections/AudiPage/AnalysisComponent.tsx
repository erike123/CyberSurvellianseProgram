import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  CircularProgress,
  Badge,
  Box,
} from '@mui/material';

// Interface for vulnerabilities
interface Vulnerability {
  id: number;
  description: string;
  severity: 'Low' | 'Medium' | 'High';
}

// Mock vulnerabilities (for demo purposes, replace with real data)
const mockVulnerabilities: Vulnerability[] = [
  { id: 1, description: 'Reentrancy issue in withdraw function', severity: 'High' },
  { id: 2, description: 'Unprotected external call in fallback function', severity: 'Medium' },
  { id: 3, description: 'Unchecked return value from low-level call', severity: 'Low' },
  { id: 4, description: 'Missing event on critical state change', severity: 'Medium' },
  { id: 5, description: 'Unsafe delegatecall usage', severity: 'High' },
  { id: 6, description: 'Potential overflow in arithmetic operation', severity: 'High' },
  { id: 7, description: 'Unprotected access control in setter function', severity: 'Medium' },
  { id: 8, description: 'Lack of gas limit in loop', severity: 'Low' },
  { id: 9, description: 'Insecure random number generation', severity: 'High' },
  { id: 10, description: 'Direct access to private variables', severity: 'Medium' },
  { id: 11, description: 'Token transfer not checked for success', severity: 'Low' },
  { id: 12, description: 'Hardcoded address in contract', severity: 'Low' },
];

// {vulnerabilities.map((vuln, index) => (
//     <TableRow key={index}>
//       <TableCell>{vuln.id}</TableCell>
//       <TableCell>{vuln.description}</TableCell>
//       <TableCell align="center">
//         <Badge
//           badgeContent={vuln.severity}
//           color={
//             vuln.severity === 'High' ? 'error' :
//             vuln.severity === 'Medium' ? 'warning' :
//             'success'
//           }
//         >
//           <Typography
//             sx={{
//               color: vuln.severity === 'High' ? '#d32f2f' :
//                      vuln.severity === 'Medium' ? '#ff9800' :
//                      '#4caf50',
//             }}
//           >
//             {vuln.severity}
//           </Typography>
//         </Badge>
//       </TableCell>
//     </TableRow>
//   ))}


function AnalysisComponent() {
  const [vulnerabilities, setVulnerabilities] = useState<Vulnerability[]>(mockVulnerabilities);

  return (
    <div className=' flex flex-wrap gap-5 justify-center'>
        {vulnerabilities.map((vuln, index) => (
            <div className='window p-4 rounded-md w-[30%]'>
                <p className='text-white-clr'>{vuln.description}</p>
                <p 
                    className={`${vuln.severity == 'High' && 'bg-red-500'} 
                    ${vuln.severity == 'Medium' && 'bg-yellow-500'} 
                    ${vuln.severity == 'Low' && 'bg-green-500'} rounded-md inline p-1`}>
                        {vuln.severity}
                </p>
            </div>
        ))}

    </div>
  );
}

export default AnalysisComponent;
