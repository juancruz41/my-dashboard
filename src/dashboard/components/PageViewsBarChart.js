import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { BarChart } from '@mui/x-charts/BarChart';
import { useTheme } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { getData } from '../../config/api'; // Asegúrate de importar la función de la API

export default function PageViewsBarChart() {
  const theme = useTheme();
  const [chartData, setChartData] = useState(null); // Estado para los datos de la API

  // Cargar los datos desde la API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData('pageviews'); // Endpoint que devuelve los datos de las visualizaciones
        setChartData(data); // Guardamos los datos obtenidos
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Si los datos aún no están disponibles, mostramos un mensaje de "Cargando..."
  if (!chartData) {
    return <Typography>Cargando...</Typography>;
  }

  const colorPalette = [
    (theme.vars || theme).palette.primary.dark,
    (theme.vars || theme).palette.primary.main,
    (theme.vars || theme).palette.primary.light,
  ];

  return (
    <Card variant="outlined" sx={{ width: '100%' }}>
      <CardContent>
        <Typography component="h2" variant="subtitle2" gutterBottom>
          Page views and downloads
        </Typography>
        <Stack sx={{ justifyContent: 'space-between' }}>
          <Stack
            direction="row"
            sx={{
              alignContent: { xs: 'center', sm: 'flex-start' },
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Typography variant="h4" component="p">
              {chartData.totalPageViews} {/* Mostramos el total de las visualizaciones de la API */}
            </Typography>
            <Chip size="small" color="error" label={chartData.trendLabel} /> {/* Tendencia de la API */}
          </Stack>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            Page views and downloads for the last 6 months
          </Typography>
        </Stack>
        <BarChart
          borderRadius={8}
          colors={colorPalette}
          xAxis={[{
            scaleType: 'band',
            categoryGapRatio: 0.5,
            data: chartData.months,  // Suponiendo que la API devuelve los meses
          }]}
          series={[
            {
              id: 'page-views',
              label: 'Page views',
              data: chartData.pageViews,  // Datos de visualizaciones de la API
              stack: 'A',
            },
            {
              id: 'downloads',
              label: 'Downloads',
              data: chartData.downloads,  // Datos de descargas de la API
              stack: 'A',
            },
            {
              id: 'conversions',
              label: 'Conversions',
              data: chartData.conversions,  // Datos de conversiones de la API
              stack: 'A',
            },
          ]}
          height={250}
          margin={{ left: 50, right: 0, top: 20, bottom: 20 }}
          grid={{ horizontal: true }}
          slotProps={{
            legend: {
              hidden: true,
            },
          }}
        />
      </CardContent>
    </Card>
  );
}
