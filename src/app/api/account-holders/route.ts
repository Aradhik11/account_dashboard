// import { NextResponse } from 'next/server';
// import { z } from 'zod';
// import { prisma } from '@/lib/prisma';

// // Input validation schemas
// const createAccountSchema = z.object({
//   firstName: z.string().min(1).max(100),
//   lastName: z.string().min(1).max(100),
//   email: z.string().email().optional(),
//   occupation: z.string().min(1).max(100),
//   imageUrl: z.string().optional(),
// });

// const updateAccountSchema = z.object({
//   id: z.string(),
//   firstName: z.string().min(1).max(100).optional(),
//   lastName: z.string().min(1).max(100).optional(),
//   email: z.string().email().optional(),
//   occupation: z.string().min(1).max(100).optional(),
//   imageUrl: z.string().optional(),
//   status: z.enum(['active', 'inactive']).optional(),
// });

// // Create a new account holder
// export async function POST(request: Request) {
//   try {
//     console.log('POST request received');

//     const body = await request.json();
//     console.log('Request body:', body);

//     // Validate input
//     const validatedData = createAccountSchema.parse(body);
//     console.log('Validated data:', validatedData);

//     // Test database connection
//     try {
//       await prisma.$connect();
//       console.log('Database connection successful');
//     } catch (dbError) {
//       console.error('Database connection failed:', dbError);
//       throw dbError;
//     }

//     const accountHolder = await prisma.accountHolder.create({
//       data: validatedData,
//     });
//     console.log('Account holder created:', accountHolder);

//     return NextResponse.json(accountHolder, { status: 201 });
//   } catch (error) {
//     console.error('Detailed error:', {
//       name: error.name,
//       message: error.message,
//       stack: error.stack,
//     });

//     if (error instanceof z.ZodError) {
//       return NextResponse.json(
//         { error: 'Validation failed', details: error.errors },
//         { status: 400 }
//       );
//     }

//     // Check for specific database errors
//     if (error.code === 'P2002') {
//       return NextResponse.json(
//         { error: 'A user with this email already exists' },
//         { status: 409 }
//       );
//     }

//     return NextResponse.json(
//       {
//         error: 'Failed to create account holder',
//         details: error.message
//       },
//       { status: 500 }
//     );
//   } finally {
//     await prisma.$disconnect();
//   }
// }

// // Get all account holders
// export async function GET() {
//   try {
//     const accountHolders = await prisma.accountHolder.findMany({
//       orderBy: { createdAt: 'desc' },
//     });
//     return NextResponse.json(accountHolders);
//   } catch (error) {
//     console.error('Error fetching account holders:', error);
//     return NextResponse.json(
//       { error: 'Failed to fetch account holders' },
//       { status: 500 }
//     );
//   }
// }

// // Update an account holder
// export async function PUT(request: Request) {
//   try {
//     const body = await request.json();

//     // Validate input
//     const validatedData = updateAccountSchema.parse(body);
//     const { id, ...updateData } = validatedData;

//     // Check if account holder exists
//     const existingHolder = await prisma.accountHolder.findUnique({
//       where: { id },
//     });

//     if (!existingHolder) {
//       return NextResponse.json(
//         { error: 'Account holder not found' },
//         { status: 404 }
//       );
//     }

//     const updatedHolder = await prisma.accountHolder.update({
//       where: { id },
//       data: updateData,
//     });

//     return NextResponse.json(updatedHolder);
//   } catch (error) {
//     if (error instanceof z.ZodError) {
//       return NextResponse.json(
//         { error: 'Validation failed', details: error.errors },
//         { status: 400 }
//       );
//     }

//     console.error('Error updating account holder:', error);
//     return NextResponse.json(
//       { error: 'Failed to update account holder' },
//       { status: 500 }
//     );
//   }
// }

// // Delete an account holder
// export async function DELETE(request: Request) {
//   try {
//     const { searchParams } = new URL(request.url);
//     const id = searchParams.get('id');

//     if (!id) {
//       return NextResponse.json(
//         { error: 'Account holder ID is required' },
//         { status: 400 }
//       );
//     }

//     // Check if account holder exists
//     const existingHolder = await prisma.accountHolder.findUnique({
//       where: { id },
//     });

//     if (!existingHolder) {
//       return NextResponse.json(
//         { error: 'Account holder not found' },
//         { status: 404 }
//       );
//     }

//     // Soft delete by updating status
//     await prisma.accountHolder.update({
//       where: { id },
//       data: { status: 'inactive' },
//     });

//     return NextResponse.json(
//       { message: 'Account holder deleted successfully' },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error('Error deleting account holder:', error);
//     return NextResponse.json(
//       { error: 'Failed to delete account holder' },
//       { status: 500 }
//     );
//   }
// }
