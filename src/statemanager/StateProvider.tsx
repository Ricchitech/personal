import StateManager from "./BaseContext";

export const StateProvider = (props: any) => {
  const defaultThumbnnail64 =
    "iVBORw0KGgoAAAANSUhEUgAAABsAAAAeCAYAAADdGWXmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKUSURBVHgBzZY7juJAEIbbvENSMpMBEUcAgZCIFk6wMydY5gTACQZOMN4TsEQEPOw9AQQIwnGGRIIjxJv9izHIbtpLW2ywv9Rq3I/6uququ2Hsf9Ziscgtl0sd5QO/VT9zFdmBBAkGg/Xz+ZxzGVAU7Xg8NhOJhPnIxkOYF+TOkARUeRbiB6r8K4gMVPELgRELY1r4qaK8MB9QZbVaxff7fUcWsl6v28lk0rIXqAYCgboktKXYEz79QHhJQk1PmAzEJ9QTNjmdTlVRRo3H43g0Gs3RYtLptME8oIj/GIuNO2EBJtZEBJpOp1mAaGEUY302m33O53OVH0dz0X/nDS+YUPBAB5VztSqM/pCdH7Jr09lILuIHkvvYV7rzqqC88Y2wQbu7feO3KX03kuC2FXPvjGRkMpm8zHxfbkTSNLkma7vdvjJJXXbW6/VUZ2MsFrPy+bww3bE7ilvlMllRXpCRP0XjeJukkK7rKlbsSn18a6iEK7bPH3ukSCSiM3eMzQB2YArGxtnzUp0flCDXmJncwBx7QvBWlm+j7LzCfnF98X6/n2MPJDoiJITh7uxhZ0bI7uziwNacnfTcoDL4SZvNpolbhOJmpVKpLt9POUAvCB9XvCy/b+dsNBrpgmemWSgUGsyHPOxosPN6O2f0wAnm1ofDYYNJCDuKA6QJQNZut7vYdt0gg8FAQxy+84bQZhwOh7dSqTQRgSi+cPsHQCrfh7ZasVhs38FodXSbo2RFRgGdoI+Apt2koq3CPSVOteC+2715dzfSyUcCdLyAPuQCCWFXIVbvqGrMvyhTG1fXScFItMtwOPxOrmISEBQNydAul8umaIDUE0NQJEAOZ/Eb+4rTJUb2azxBn2FZVrdarf71v8ofphWSXcAUfPUAAAAASUVORK5CYII=";

  //Destructuring all data and passing as a value
  const alldata = {
    defaultThumbnnail64,
  };

  return (
    <StateManager.Provider value={alldata}>
      {props.children}
    </StateManager.Provider>
  );
};
