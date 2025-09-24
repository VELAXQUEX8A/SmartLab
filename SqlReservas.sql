DO $$
DECLARE
    i INT := 1;
    estados TEXT[] := ARRAY['Pendiente', 'Aprobada', 'Rechazada'];
    fecha_base DATE := CURRENT_DATE;
    hora_inicio_base TIME := TIME '08:00:00';
    duracion INTERVAL := INTERVAL '2 hours';
    id_usuario INT;
    id_lab INT;
    estado_actual TEXT;
BEGIN
    WHILE i <= 100 LOOP
        -- Ciclar usuario_id entre 1 y 20
        id_usuario := ((i - 1) % 20) + 1;
        -- Ciclar laboratorio_id entre 1 y 5
        id_lab := ((i - 1) % 5) + 1;
        -- Escoger estado aleatorio
        estado_actual := estados[1 + (random() * 2)::int];

        INSERT INTO salas_reserva (
            fecha,
            hora_inicio,
            hora_fin,
            estado,
            laboratorio_id,
            usuario_id
        ) VALUES (
            fecha_base + (i || ' days')::interval,
            hora_inicio_base + ((i % 5) * INTERVAL '1 hour'),
            hora_inicio_base + ((i % 5) * INTERVAL '1 hour') + duracion,
            estado_actual,
            id_lab,
            id_usuario
        );

        i := i + 1;
    END LOOP;
END $$;
