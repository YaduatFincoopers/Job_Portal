import { useState } from 'react';
import {
    FiCalendar, 
    FiClock,
    FiVideo,
    FiMapPin,
    FiPlus,
    FiBell,
    FiEdit,
    FiTrash2,
} from 'react-icons/fi';

import { useToast } from '@/hooks/use-toast';

// UI Components
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    Avatar,
    AvatarFallback,
    AvatarImage,
    Badge,
    Button,
    Calendar,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    Input,
    Label,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui';

const Scheduling = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isScheduleDialogOpen, setIsScheduleDialogOpen] = useState(false);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [editingInterview, setEditingInterview] = useState(null);
    const [interviews, setInterviews] = useState([/* ... same data ... */]);
    const { toast } = useToast();

    const handleSetReminders = () => {
        toast({
            title: 'Reminders Set',
            description: "You'll be notified 30 minutes before each interview.",
        });
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Interview Schedule</h1>
                    <p className="text-gray-600 mt-1">
                        Manage your upcoming interviews and availability
                    </p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" onClick={handleSetReminders}>
                        <FiBell className="mr-2 h-4 w-4" />
                        Set Reminders
                    </Button>
                    <Dialog open={isScheduleDialogOpen} onOpenChange={setIsScheduleDialogOpen}>
                        <DialogTrigger asChild>
                            <Button className="bg-gradient-to-r from-blue-500 to-purple-500">
                                <FiPlus className="mr-2 h-4 w-4" />
                                Schedule Interview
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Schedule New Interview</DialogTitle>
                                <DialogDescription>
                                    Add a new interview to your schedule.
                                </DialogDescription>
                            </DialogHeader>
                            {/* Form here... */}
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            <Card className="lg:col-span-1">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <FiCalendar className="h-5 w-5 text-blue-500" /> Calendar
                    </CardTitle>
                    <CardDescription>Select a date to view interviews</CardDescription>
                </CardHeader>
                <CardContent>
                    <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        className="rounded-md border pointer-events-auto"
                    />
                </CardContent>
            </Card>
        </div>
    );
};

export default Scheduling;