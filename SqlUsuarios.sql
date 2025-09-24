DO $$
DECLARE
    i INT := 1;
    hashed_password TEXT := 'pbkdf2_sha256$260000$liZdt8YPxVQXf8gdXb3zM5$T1BDshPTjJydZpZkxVnRZGwGAv6eDwX1tOboHrs2YZ0=';
BEGIN
    WHILE i <= 200 LOOP
        INSERT INTO auth_user (
            password,
            last_login,
            is_superuser,
            username,
            first_name,
            last_name,
            email,
            is_staff,
            is_active,
            date_joined
        ) VALUES (
            hashed_password,
            NULL,
            FALSE,
            'user' || i,
            'Nombre' || i,
            'Apellido' || i,
            'user' || i || '@example.com',
            FALSE,
            TRUE,
            NOW()
        );
        i := i + 1;
    END LOOP;
END $$;
